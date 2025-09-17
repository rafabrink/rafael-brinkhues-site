import React from 'react'
import { GraduationCap, Briefcase, Award, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import personalData from '../data/personal.json'
import experienceData from '../data/experience.json'

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Sobre Rafael Brinkhues</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça minha trajetória acadêmica e profissional na área de Gestão de Sistemas de Informação
          </p>
        </div>

        {/* Biography */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Biografia Profissional</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {personalData.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Atua como servidor colaborador junto à Secretaria Extraordinária da Presidência da República 
                  para Apoio à Reconstrução do Rio Grande do Sul na área de gestão, integração e inteligência 
                  de dados. É pesquisador e líder do Grupo de Pesquisa CNPq - Tecnologia e Ciências da Decisão 
                  e 2º Líder do Grupo de Pesquisa CNPq - Capacidades de Informação e de Tecnologia Digital.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground">Foto</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Formação Acadêmica</h2>
          </div>

          <div className="space-y-6">
            {experienceData.education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Trabalho:</strong> {edu.thesis}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Orientador:</strong> {edu.advisor}
                  </p>
                  {edu.exchange && (
                    <p className="text-sm text-muted-foreground">
                      <strong>Intercâmbio:</strong> {edu.exchange}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Experiência Profissional</h2>
          </div>

          <div className="space-y-6">
            {experienceData.experience.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-base">
                    {exp.organization} • {exp.period}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Liderança Acadêmica</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.leadership.map((leadership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{leadership.role}</CardTitle>
                  <CardDescription>
                    {leadership.organization} • {leadership.period}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Prêmios e Reconhecimentos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{award.award}</CardTitle>
                  <CardDescription>
                    {award.organization} • {award.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Globe className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Idiomas</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {personalData.languages.map((lang, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{lang.language}</h3>
                  <Badge variant="outline">{lang.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

