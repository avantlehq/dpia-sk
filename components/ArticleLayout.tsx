import type { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  description?: string;
  badge?: string;
  children: ReactNode;
}

export function ArticleLayout({ title, description, badge, children }: ArticleLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {badge && (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          {badge}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-xl text-gray-500 leading-relaxed">{description}</p>
      )}
      <div className="mt-10 prose prose-lg max-w-none text-gray-700 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-5 [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:mb-2">
        {children}
      </div>
    </div>
  );
}
