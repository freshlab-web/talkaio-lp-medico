
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em breve entraremos em contato com você.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        clinic: '',
      });
    }, 1500);
  };

  return (
    <section className="bg-white section-padding" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title">Quer ver como funciona?</h2>
            <p className="text-lg text-gray-600">
              Preencha o nosso formulário abaixo, vamos te enviar uma mensagem de boas-vindas automática no WhatsApp para agendar um atendimento com nossa equipe.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(00) 00000-0000"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="clinic">Nome da clínica odontológica</Label>
                  <Input 
                    id="clinic"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                    required
                    placeholder="Nome da sua clínica"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-talkaio-blue hover:bg-talkaio-darkBlue text-white py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Quero reduzir ligações da minha clínica odontológica com atendimento automatizado'}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Ao enviar o formulário, você concorda com a nossa Política de Privacidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
