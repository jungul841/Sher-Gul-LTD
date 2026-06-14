import { ReactNode } from 'react';

interface ContentPageProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-slate-300">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 prose prose-lg prose-slate h-full flex-grow">
        {children}
      </div>
    </div>
  );
}
