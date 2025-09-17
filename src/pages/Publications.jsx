import React, { useState } from 'react'
import { BookOpen, FileText, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import publicationsData from '../data/publications.json'

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('all')

  // Filter publications based on search term and area
  const filteredJournals = publicationsData.journals.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesArea = selectedArea === 'all' || pub.area === selectedArea
    return matchesSearch && matchesArea
  })

  const filteredConferences = publicationsData.conferences.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesArea = selectedArea === 'all' || pub.area === selectedArea
    return matchesSearch && matchesArea
  })

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publicações</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Produção científica em Administração com ênfase em Sistemas de Informação
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Buscar por título ou autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedArea === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedArea('all')}
                size="sm"
              >
                Todas
              </Button>
              {publicationsData.areas.map((area) => (
                <Button
                  key={area.id}
                  variant={selectedArea === area.id ? 'default' : 'outline'}
                  onClick={() => setSelectedArea(area.id)}
                  size="sm"
                >
                  {area.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Journal Articles */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">
              Artigos em Periódicos ({filteredJournals.length} resultados)
            </h2>
          </div>

          <div className="space-y-6">
            {filteredJournals.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                  <CardDescription>
                    {pub.authors.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>{pub.journal}</strong>, {pub.year}
                        {pub.volume && `, vol. ${pub.volume}`}
                        {pub.pages && `, p. ${pub.pages}`}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        DOI
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJournals.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Nenhum artigo encontrado com os filtros aplicados.
            </div>
          )}
        </section>

        {/* Conference Papers */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">
              Trabalhos em Eventos ({filteredConferences.length} resultados)
            </h2>
          </div>

          <div className="space-y-6">
            {filteredConferences.map((pub) => (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                  <CardDescription>
                    {pub.authors.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>{pub.conference}</strong>, {pub.year}
                        {pub.location && ` • ${pub.location}`}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {pub.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredConferences.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Nenhum trabalho encontrado com os filtros aplicados.
            </div>
          )}
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Áreas de Pesquisa</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicationsData.areas.map((area) => (
              <Card key={area.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Publications

