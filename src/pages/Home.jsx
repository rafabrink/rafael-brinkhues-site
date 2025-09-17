import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import personalData from '../data/personal.json'
import publicationsData from '../data/publications.json'
import projectsData from '../data/projects.json'
import experienceData from '../data/experience.json'

const Home = () => {
  // Get recent publications (first 3)
  const recentPublications = publicationsData.journals.slice(0, 3)
  
  // Get active projects (first 2)
  const activeProjects = projectsData.active.slice(0, 2)

  // Get recent awards (first 2)
  const recentAwards = experienceData.awards.slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  {personalData.name}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  {personalData.title}
                </p>
                <p className="text-lg text-muted-foreground">
                  {personalData.tagline}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/pesquisa">
                    Conheça minha pesquisa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contato">Entre em contato</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground">RB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personalData.bio}
          </p>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link to="/sobre">
                Leia mais sobre minha trajetória
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Áreas de Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Principais competências e focos de pesquisa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalData.expertise.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{personalData.stats.experience}</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{personalData.stats.publications}</div>
              <div className="text-sm text-muted-foreground">Publicações</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{personalData.stats.projects}</div>
              <div className="text-sm text-muted-foreground">Projetos de Pesquisa</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{personalData.stats.supervisions}</div>
              <div className="text-sm text-muted-foreground">Orientações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destaques Recentes</h2>
            <p className="text-lg text-muted-foreground">
              Publicações, projetos e reconhecimentos mais recentes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Publications */}
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Publicações Recentes</h3>
              </div>
              <div className="space-y-4">
                {recentPublications.map((pub) => (
                  <Card key={pub.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">{pub.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {pub.journal}, {pub.year}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pub.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/publicacoes">Ver todas as publicações</Link>
                </Button>
              </div>
            </div>

            {/* Active Projects */}
            <div>
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Projetos Ativos</h3>
              </div>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">{project.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {project.funding} • {project.period}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/pesquisa">Ver todos os projetos</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-2" />
              <h2 className="text-3xl font-bold">Prêmios e Reconhecimentos</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentAwards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{award.award}</CardTitle>
                  <CardDescription>{award.organization} • {award.year}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/sobre">Ver todos os reconhecimentos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

