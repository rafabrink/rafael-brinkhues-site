import React from 'react'
import { Search, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import projectsData from '../data/projects.json'

const Research = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pesquisa</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos de pesquisa, grupos de estudo e áreas de investigação em Gestão de Sistemas de Informação
          </p>
        </div>

        {/* Research Groups */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Grupos de Pesquisa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.researchGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{group.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{group.role}</Badge> • {group.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {group.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Linhas de Pesquisa:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {group.lines.map((line, lineIndex) => (
                        <li key={lineIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Active Projects */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Projetos Ativos</h2>
          </div>

          <div className="space-y-6">
            {projectsData.active.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    {project.funding} • {project.period}
                    {project.grantNumber && ` • ${project.grantNumber}`}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Badge variant="default">Ativo</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {project.budget && (
                      <div>
                        <span className="font-medium">Financiamento:</span>
                        <span className="text-muted-foreground ml-2">{project.budget}</span>
                      </div>
                    )}
                    <div>
                      <span className="font-medium">Equipe:</span>
                      <span className="text-muted-foreground ml-2">{project.team.length} pesquisadores</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Completed Projects */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Projetos Concluídos</h2>
          </div>

          <div className="space-y-6">
            {projectsData.completed.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>
                    {project.funding} • {project.period}
                    {project.grantNumber && ` • ${project.grantNumber}`}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Concluído</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {project.budget && (
                      <div>
                        <span className="font-medium">Financiamento:</span>
                        <span className="text-muted-foreground ml-2">{project.budget}</span>
                      </div>
                    )}
                    {project.partner && (
                      <div>
                        <span className="font-medium">Parceiro:</span>
                        <span className="text-muted-foreground ml-2">{project.partner}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Funding Agencies */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Search className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Agências de Fomento</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.fundingAgencies.map((agency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{agency.name}</CardTitle>
                  <CardDescription>{agency.fullName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Projetos:</span>
                      <span className="text-muted-foreground ml-2">{agency.projects}</span>
                    </div>
                    <div>
                      <span className="font-medium">Financiamento:</span>
                      <span className="text-muted-foreground ml-2">{agency.totalFunding}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Research

