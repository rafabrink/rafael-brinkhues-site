import React from 'react'
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const Teaching = () => {
  const currentCourses = [
    {
      course: "Sistemas de Informação para Administração Pública e Social",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      level: "Graduação",
      period: "2024 - Atual"
    },
    {
      course: "Administração Financeira para Engenharias e Biomedicina",
      institution: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      level: "Graduação",
      period: "2024 - Atual"
    },
    {
      course: "Sistemas de Informações Gerenciais",
      institution: "Instituto Federal do Rio Grande do Sul - Campus Viamão",
      level: "Superior de Tecnologia",
      period: "2011 - Atual"
    },
    {
      course: "Planejamento Estratégico",
      institution: "Instituto Federal do Rio Grande do Sul - Campus Viamão",
      level: "Superior de Tecnologia",
      period: "2011 - Atual"
    }
  ]

  const specialCourses = [
    {
      course: "Gestão Pública Transparente: Integridade, Ética e Dados Abertos",
      institution: "Presidência da República",
      audience: "Servidores da Presidência da República",
      year: "2024"
    },
    {
      course: "Processos Gerenciais",
      institution: "Instituto Educacional Josué de Castro",
      audience: "Curso Técnico em Administração de Cooperativas",
      year: "2022-2024"
    },
    {
      course: "Administração da Produção",
      institution: "Instituto Educacional Josué de Castro",
      audience: "Primeira Turma Internacionalista Comandante Hugo Chávez",
      year: "2023"
    }
  ]

  const supervisions = [
    {
      type: "Iniciação Científica",
      count: "15+",
      description: "Orientações de projetos PIBIC/PIBITI em temas relacionados à gestão da informação e transformação digital"
    },
    {
      type: "Trabalhos de Conclusão",
      count: "20+",
      description: "Orientações de TCC em cursos de graduação e tecnologia, focando em sistemas de informação e gestão"
    },
    {
      type: "Projetos de Pesquisa",
      count: "10+",
      description: "Coordenação e orientação de projetos de pesquisa aplicada com parceiros externos"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ensino</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atividades docentes, disciplinas ministradas e orientações acadêmicas
          </p>
        </div>

        {/* Current Courses */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Disciplinas Atuais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.course}</CardTitle>
                  <CardDescription>{course.institution}</CardDescription>
                  <div className="flex gap-2">
                    <Badge variant="default">{course.level}</Badge>
                    <Badge variant="outline">{course.period}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Courses */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Cursos e Workshops Especiais</h2>
          </div>

          <div className="space-y-6">
            {specialCourses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.course}</CardTitle>
                  <CardDescription>
                    {course.institution} • {course.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Público-alvo:</strong> {course.audience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Supervisions */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Orientações</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supervisions.map((supervision, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {supervision.count}
                  </div>
                  <CardTitle className="text-lg">{supervision.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {supervision.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Filosofia de Ensino</h2>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Minha abordagem pedagógica integra teoria e prática, conectando conceitos de gestão da informação 
                  e sistemas de informação com aplicações reais no contexto organizacional. Busco desenvolver nos 
                  estudantes não apenas conhecimento técnico, mas também pensamento crítico e capacidade de análise.
                </p>
                <p>
                  Nas disciplinas que ministro, enfatizo a importância da transformação digital e das capacidades 
                  organizacionais como elementos fundamentais para a competitividade empresarial. Utilizo metodologias 
                  ativas, estudos de caso e projetos aplicados para proporcionar experiências de aprendizagem significativas.
                </p>
                <p>
                  Como orientador, incentivo a pesquisa aplicada e a colaboração com organizações locais, permitindo 
                  que os estudantes contribuam para soluções reais enquanto desenvolvem suas competências acadêmicas 
                  e profissionais.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Areas of Interest */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Áreas de Interesse para Orientação</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Gestão Estratégica da Informação",
              "Transformação Digital",
              "Business Intelligence",
              "Capacidades Organizacionais",
              "Governança de Dados",
              "Sistemas de Informação Gerencial",
              "Análise de Dados para Tomada de Decisão",
              "Tecnologia da Informação em Cooperativas",
              "Agilidade Organizacional"
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <h3 className="font-medium text-sm">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Teaching

