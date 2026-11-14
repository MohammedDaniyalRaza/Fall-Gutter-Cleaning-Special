import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { CTABand } from '../components/home/CTABand';
import { PageTransition } from '../components/layout/PageTransition';
import { Lightbox } from '../components/ui/Lightbox';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SmartImage } from '../components/ui/SmartImage';
import { PROJECT_CATEGORIES, PROJECTS, ProjectCategory } from '../data/projects';
import { cn } from '../lib/utils';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((item) => item.category === filter);

  return (
    <PageTransition>
      <PageHero
        elevation="ELEV. 01 · PROJECT ARCHIVE"
        titleLight="Before & after"
        titleBold="field results."
        subtitle="Real gutter cleanings, downspout extractions, hidden hanger upgrades, and seam resealing across Western Massachusetts and Connecticut."
        imageSlot="projectsHero"
        objectPosition="50% 45%"
        bottomFill="#FFFFFF"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects' },
        ]}
      />

      {/* Interactive Before & After Slider */}
      <BeforeAfter elevation="BEFORE & AFTER SLIDER" />

      {/* Filterable Photo Grid */}
      <section className="bg-[#F6F4F0] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            elevation="FIELD GALLERY"
            titleLight="Browse recent"
            titleBold="roofline jobs."
            subtitle="Click any photo to inspect full resolution details."
          />

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
            {PROJECT_CATEGORIES.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(category);
                    setLightboxIndex(null);
                  }}
                  className={cn(
                    'px-4 py-2 text-xs font-semibold rounded-sm border transition-colors cursor-pointer whitespace-nowrap',
                    active
                      ? 'bg-[#0F1F3D] border-[#0F1F3D] text-white'
                      : 'bg-white border-[#D9DEE5] text-[#0F1F3D] hover:border-[#F26A1B]'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
            {filtered.map((project, idx) => (
              <article
                key={project.id}
                className="h-full group rounded-sm border border-[#D9DEE5] bg-white overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${project.title} in photo viewer`}
                  className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#0F1F3D] cursor-pointer text-left"
                >
                  <SmartImage
                    slot={project.imageSlot}
                    alt={project.title}
                    objectPosition={project.objectPosition || '50% 50%'}
                    className="w-full h-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#091429]/0 group-hover:bg-[#091429]/25 transition-colors flex items-end justify-end p-3">
                    <span className="w-9 h-9 rounded-sm bg-[#091429]/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand size={16} />
                    </span>
                  </div>
                </button>

                <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B7686]">
                    <span className="text-[#F26A1B] font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.region}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0F1F3D]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6B7686] leading-relaxed">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={filtered}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />

      <CTABand />
    </PageTransition>
  );
};

export default Projects;
