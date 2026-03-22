"use client";

import type { Repository } from "@/app/projects/page";
import Link from "next/link";
import { ArrowUpRight, CalendarClock, GitFork, Globe2, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { GitHubContributions } from "./github-contributions";
import { ScrollRevealStagger } from "@/components/ui/scroll-reveal-stagger";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/routing";

type ProjectsProps = {
  projects: Repository[];
};

export function Projects({ projects }: ProjectsProps) {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";
  const latestProjects = projects.slice(0, 7);

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="mx-auto mb-8 max-w-5xl text-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white md:text-5xl">
            {isEs ? (
              <>
                Mis portafolios y <span className="text-violet-500 dark:text-violet-400">contribuciones</span> en tiempo real
              </>
            ) : (
              <>
                My portfolios and real-time <span className="text-violet-500 dark:text-violet-400">contributions</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
            {isEs
              ? "Seguimiento profesional de actividad en GitHub con visualización de contribuciones y una selección curada de repositorios recientes."
              : "Professional tracking of GitHub activity with contribution visualization and a curated selection of recent repositories."}
          </p>
        </div>

        <div className="rounded-[2rem] border border-violet-300/40 bg-zinc-100/70 p-4 dark:border-violet-500/20 dark:bg-zinc-950/70 md:p-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-400/40 dark:text-violet-300">
            <CalendarClock className="h-3.5 w-3.5" />
            {isEs ? "Contribuciones de GitHub" : "GitHub Contributions"}
          </div>
          <GitHubContributions username="driano7" />
        </div>

        <div className="mt-8 rounded-[2rem] border border-violet-300/40 bg-zinc-100/75 p-5 dark:border-violet-500/25 dark:bg-zinc-950/80 md:p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-400/40 dark:text-violet-300">
            {isEs ? "Proyecto en desarrollo" : "Project in progress"}
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            {isEs
              ? "Xoco Suite - POS, métricas avanzadas y app cliente"
              : "Xoco Suite - POS, advanced metrics, and client app"}
          </h3>
          <p className="mt-3 max-w-5xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            {isEs
              ? "Proyecto en el que he estado trabajando durante los últimos meses. Xoco Suite es un software integral para restaurantes y negocios de alimentos que conecta sitio web, app de cliente y punto de venta en una sola arquitectura de producto. El POS se integra directamente con la app de cliente para sincronizar pedidos en tiempo real y habilitar una operación continua entre atención, cocina y servicio."
              : "A project I have been building over the last few months. Xoco Suite is an integrated software product for restaurants and food businesses that connects website, client app, and point of sale in one architecture. The POS is directly integrated with the client app to sync orders in real time and enable continuous operations across service, kitchen, and support."}
          </p>
          <p className="mt-3 max-w-5xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
            {isEs
              ? "La solución incorpora métricas avanzadas, gestión de higiene y cumplimiento alineada a organismos gubernamentales, y una capa de pagos moderna: gracias al acuerdo con "
              : "The solution includes advanced metrics, hygiene and compliance management aligned with government entities, and a modern payment layer: thanks to an agreement with "}
            <Link
              href="https://blokko.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-900 dark:hover:text-zinc-200"
            >
              blokko.io
            </Link>
            {isEs
              ? ", permite recibir pagos en cripto o en rieles latinoamericanos como PIX, SPEI y Mercado Libre, con liquidación al día siguiente en moneda local, bajo una experiencia equivalente a una transacción con tarjeta Visa o Master card."
              : ", it supports crypto payments and LATAM payment rails such as PIX, SPEI, and Mercado Libre, with next-day settlement in local currency under an experience equivalent to a Visa or Master card transaction."}
          </p>
        </div>

        <div className="mt-12 mb-6 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl">
            {isEs ? "Repositorios recientes destacados" : "Featured recent repositories"}
          </h3>
          <span className="rounded-full border border-zinc-300 bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300">
            {isEs ? "Showcase técnico" : "Technical showcase"}
          </span>
        </div>

        <ScrollRevealStagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {latestProjects.map((project, index) => {
            const bars = [24, 40, 58, 76].map((base, barIndex) => {
              const activityBoost = Math.min(22, Math.floor((project.stargazers_count + project.forks_count) / (barIndex + 3)));
              return Math.min(92, base + activityBoost);
            });

            return (
              <article
                key={project.id}
                className="rounded-[2rem] border border-zinc-300 bg-white/80 p-3 transition-colors hover:border-violet-400/60 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-violet-500/45"
              >
                <div className="relative mb-4 h-44 overflow-hidden rounded-[1.4rem] border border-zinc-300/80 bg-gradient-to-br from-violet-500/20 via-zinc-100 to-sky-500/15 p-4 dark:border-zinc-700/70 dark:via-zinc-900">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-400/20 blur-xl" />
                  <div className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-sky-400/15 blur-xl" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-300 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-200">
                      <Globe2 className="h-3.5 w-3.5 text-violet-500 dark:text-violet-300" />
                      {project.language ?? (isEs ? "Repositorio" : "Repository")}
                    </div>
                    <div className="flex items-end gap-2">
                      {bars.map((height, barIndex) => (
                        <div
                          key={`${project.id}-bar-${barIndex}`}
                          className="w-10 rounded-t-xl border border-violet-500/30 bg-violet-500/70"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-zinc-100/80 px-2.5 py-1 text-[11px] font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-300">
                    #{index + 1} {isEs ? "Portafolio" : "Portfolio"}
                  </div>

                  <h4 className="text-xl font-bold leading-tight text-zinc-900 dark:text-white">{project.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {project.description ?? (isEs ? "Repositorio sin descripción por el momento." : "Repository without description yet.")}
                  </p>

                  <div className="mt-3 rounded-xl border border-violet-500/25 bg-violet-500/10 px-3 py-2 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Star className="h-4 w-4 text-violet-500 dark:text-violet-300" />
                        {project.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GitFork className="h-4 w-4 text-violet-500 dark:text-violet-300" />
                        {project.forks_count}
                      </span>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {isEs ? "Actualizado " : "Updated "} {formatDistanceToNow(new Date(project.pushed_at), { addSuffix: true })}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-frosted mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  >
                    {isEs ? "Abrir repositorio" : "Open repository"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </ScrollRevealStagger>

        {latestProjects.length === 0 && (
          <div className="mt-6 rounded-2xl border border-zinc-300 bg-white/70 px-4 py-5 text-center text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400">
            {isEs ? "No hay proyectos disponibles en este momento." : "No projects available right now."}
          </div>
        )}
      </div>
    </section>
  );
}
