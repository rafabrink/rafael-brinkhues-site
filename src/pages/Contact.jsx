import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ExternalLink, Send } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import personalData from '../data/personal.json'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData)
    alert('Mensagem enviada! Entrarei em contato em breve.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: personalData.social.linkedin, 
      icon: ExternalLink,
      description: 'Perfil profissional'
    },
    { 
      name: 'Google Scholar', 
      url: personalData.social.googleScholar, 
      icon: ExternalLink,
      description: 'Publicações acadêmicas'
    },
    { 
      name: 'ORCID', 
      url: personalData.social.orcid, 
      icon: ExternalLink,
      description: 'Identificador acadêmico'
    },
    { 
      name: 'ResearchGate', 
      url: personalData.social.researchGate, 
      icon: ExternalLink,
      description: 'Rede de pesquisadores'
    },
    { 
      name: 'Currículo Lattes', 
      url: personalData.social.lattes, 
      icon: ExternalLink,
      description: 'Currículo completo'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato para colaborações, orientações ou discussões sobre pesquisa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-2" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${personalData.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">{personalData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-muted-foreground">{personalData.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Institutional Affiliations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Afiliações Institucionais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Universidade Federal do Rio Grande do Sul</p>
                  <p className="text-sm text-muted-foreground">Professor em Colaboração Técnica</p>
                </div>
                <div>
                  <p className="font-medium">Instituto Federal do Rio Grande do Sul</p>
                  <p className="text-sm text-muted-foreground">Professor EBTT - Campus Viamão</p>
                </div>
                <div>
                  <p className="font-medium">Presidência da República</p>
                  <p className="text-sm text-muted-foreground">Assessor - Secretaria de Reconstrução do RS</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Perfis Acadêmicos e Profissionais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <link.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-6 w-6 text-primary mr-2" />
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Descreva sua solicitação, dúvida ou proposta de colaboração..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="mt-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Oportunidades de Colaboração</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Projetos de pesquisa em gestão da informação</li>
                  <li>• Orientações de mestrado e doutorado</li>
                  <li>• Consultorias em transformação digital</li>
                  <li>• Parcerias institucionais</li>
                  <li>• Palestras e workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

