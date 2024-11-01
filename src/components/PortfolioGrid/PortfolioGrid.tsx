'use client';

import { activeProjects } from "@/projects";

export const PortfolioGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-0">
        {activeProjects.map((item, index) => (
          <figure key={index} className="w-full aspect-square overflow-hidden relative group">
            {item.slug ? (
              <a href={`/proyectos/${item.slug}`} rel="noreferrer">
                <img src={item.portfolioImage} alt={item.title} className="object-cover w-full h-full block" />
                <div className="absolute inset-0 bg-violet-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg md:text-xl font-bold">{item.title}</span>
                </div>
              </a>
            ) : (
              <>
                <img src={item.portfolioImage} alt={item.title} className="object-cover w-full h-full block" />
                <div className="absolute inset-0 bg-violet-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg md:text-xl font-bold">{item.title}</span>
                </div>
              </>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};