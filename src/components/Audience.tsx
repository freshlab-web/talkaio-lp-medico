
import { CheckCircle } from 'lucide-react';

export default function Audience() {
  const audiences = [
    "Você é dentista autônomo ou gestor de consultório odontológico",
    "Secretárias e recepcionistas sobrecarregadas",
    "Clínicas com alto volume de pacientes",
    "Consultórios que usam WhatsApp como canal principal de atendimento"
  ];

  return (
    <section className="bg-white section-padding" id="audience">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8">
            <h2 className="section-title">Para quem é a Talkaio?</h2>
            <p className="text-lg mb-8">
              Quer saber se a Talkaio é para o seu consultório odontológico? Veja para quem o nosso sistema é compatível:
            </p>

            <div className="space-y-6">
              {audiences.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-talkaio-blue mr-3 flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-talkaio-blue rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full -translate-x-1/3 translate-y-1/3"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Por que automatizar o atendimento?</h3>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-medium">80% das perguntas dos pacientes são repetitivas</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-medium">35% das chamadas não são atendidas durante horário de pico</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-medium">Até 25% dos agendamentos são perdidos por falta de confirmação</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="font-medium">Automatize e libere sua equipe para focar no que importa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
