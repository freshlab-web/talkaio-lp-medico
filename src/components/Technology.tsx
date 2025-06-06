
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Technology() {
  const features = [
    "Integração completa com WhatsApp Business",
    "Personalização das mensagens por especialidade",
    "Envio automático de mensagens de boas-vindas",
    "Suporte e acompanhamento técnico",
    "Integração com sistema de leads da Talkaio"
  ];

  return (
    <section className="bg-talkaio-gray section-padding" id="technology">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-b from-talkaio-blue/10 to-white/0 rounded-lg transform -translate-y-4 -translate-x-4 blur-md"></div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-talkaio-blue flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/fc743b2e-b47e-455c-a025-daf0e32c8796.png" 
                      alt="Talkaio Logo" 
                      className="h-6" 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl">Plataforma Talkaio</h3>
                    <p className="text-gray-600">Gestão inteligente de comunicação</p>
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Dashboard Talkaio" 
                  className="w-full h-64 object-cover object-top rounded-lg mb-6" 
                />
                
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-talkaio-blue mr-3 flex-shrink-0" size={20} />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white w-full">
                    <a href="#contact">Quero conhecer a plataforma</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="section-title">Tecnologia pensada para o dia a dia da sua clínica</h2>
            <p className="text-lg mb-6">
              A plataforma da Talkaio foi pensada para consultórios de diferentes tamanhos e especialidades, isso porque oferecemos soluções que se adaptam às suas necessidades específicas.
            </p>
            
            <p className="text-lg mb-6">
              Nossa tecnologia integra-se perfeitamente ao seu fluxo de trabalho atual, permitindo que você mantenha suas ferramentas favoritas enquanto automatiza e melhora a comunicação com seus pacientes.
            </p>
            
            <p className="text-lg">
              Sem complicações técnicas, sem configurações complexas. A Talkaio cuida de tudo para você, desde a instalação até o suporte contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
