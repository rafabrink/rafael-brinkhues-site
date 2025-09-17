import React from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import personalData from '../../data/personal.json'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: personalData.social.linkedin, icon: ExternalLink },
    { name: 'Google Scholar', url: personalData.social.googleScholar, icon: ExternalLink },
    { name: 'ORCID', url: personalData.social.orcid, icon: ExternalLink },
    { name: 'ResearchGate', url: personalData.social.researchGate, icon: ExternalLink },
    { name: 'Lattes', url: personalData.social.lattes, icon: ExternalLink }
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${personalData.contact.email}`} className="hover:text-primary">
                  {personalData.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{personalData.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{personalData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/sobre" className="block text-sm text-muted-foreground hover:text-primary">
                Sobre
              </a>
              <a href="/pesquisa" className="block text-sm text-muted-foreground hover:text-primary">
                Pesquisa
              </a>
              <a href="/publicacoes" className="block text-sm text-muted-foreground hover:text-primary">
                Publicações
              </a>
              <a href="/contato" className="block text-sm text-muted-foreground hover:text-primary">
                Contato
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Perfis Acadêmicos</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Rafael Alfonso Brinkhues. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

