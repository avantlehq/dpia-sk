import type { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  badge?: string;
}

export function Card({ title, description, href, icon, badge }: CardProps) {
  const content = (
    <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:shadow-md hover:border-blue-200 transition-all">
      {icon && <div className="text-blue-700 mb-4">{icon}</div>}
      {badge && (
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded mb-3">
          {badge}
        </span>
      )}
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }

  return content;
}
