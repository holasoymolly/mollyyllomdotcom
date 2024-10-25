'use client';

import { allProjects } from "@/projects";

export const PortfolioGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-0">
        {allProjects.map((item, index) => (
          <figure key={index} className="w-full aspect-square overflow-hidden">
            {item.slug ? (
              <a href={`/proyectos/${item.slug}`} rel="noreferrer">
                <img src={item.portfolioImage} alt={item.title} className="object-cover w-full h-full block" />
              </a>
            ) : (
              <img src={item.portfolioImage} alt={item.title}  className="object-cover w-full h-full block" />
            )}
          </figure>
        ))}
      </div>
    </section>
  );
};