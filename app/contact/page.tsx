import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Contacteer Ons</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Vragen? We helpen u graag!</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adres</h3>
                  <p className="text-muted-foreground">
                    Parkstraat 123
                    <br />
                    2000 Antwerpen
                    <br />
                    België
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-lg p-3">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefoon</h3>
                  <a href="tel:+3234567890" className="text-muted-foreground hover:text-foreground transition-colors">
                    +32 3 456 78 90
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-lg p-3">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Openingsuren</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Ma-Do: 11:30 - 21:00</p>
                    <p>Vr-Za: 11:30 - 22:00</p>
                    <p>Zondag: 12:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <ContactForm />
          </div>

          <div className="w-full h-[400px] rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.123456789!2d4.4!3d51.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDEyJzAwLjAiTiA0wrAyNCcwMC4wIkU!5e0!3m2!1sen!2sbe!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
