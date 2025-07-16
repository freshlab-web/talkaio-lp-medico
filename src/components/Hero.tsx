
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-talkaio-lightBlue to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-talkaio-dark mb-6 leading-tight">
              Automatize o atendimento de seu consultório
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Use um canal inteligente para organizar seu atendimento e o contato com o paciente.
              <br />
              A Talkaio automatiza as conversas no WhatsApp e confirma agendamentos sem você digitar nada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-talkaio-blue hover:bg-talkaio-darkBlue text-white text-lg px-6 py-6 rounded-lg">
                <a href="#contact" className="flex items-center">
                  <MessageCircle className="mr-2" />
                  Quero automatizar meu atendimento
                </a>
              </Button>
              
              <Button variant="outline" className="border-talkaio-blue text-talkaio-blue hover:bg-talkaio-lightBlue px-6 py-6 rounded-lg">
                <a href="#benefits">Ver como funciona</a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-2/5 animate-slide-up">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-talkaio-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-talkaio-blue/10 rounded-full blur-xl"></div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-talkaio-blue flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none max-w-xs">
                    <p className="text-gray-800">Olá! Como posso agendar uma consulta com o Dr. Silva?</p>
                  </div>
                </div>
                
                <div className="flex items-start flex-row-reverse mb-4">
                  <div className="w-10 h-10 rounded-full bg-talkaio-lightBlue border border-talkaio-blue flex items-center justify-center text-talkaio-blue ml-3 flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-talkaio-blue rounded-lg p-3 rounded-tr-none max-w-xs ml-auto">
                    <p className="text-white">Olá! Claro, posso te ajudar com isso. O Dr. Silva atende nas segundas e quartas. Qual dia seria melhor para você?</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-talkaio-blue flex items-center justify-center text-white mr-3 flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none max-w-xs">
                    <p className="text-gray-800">Quarta-feira às 15h seria ótimo!</p>
                  </div>
                </div>
                
                <div className="flex items-start flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-talkaio-lightBlue border border-talkaio-blue flex items-center justify-center text-talkaio-blue ml-3 flex-shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-talkaio-blue rounded-lg p-3 rounded-tr-none max-w-xs ml-auto">
                    <p className="text-white">Perfeito! Agendei sua consulta para quarta-feira às 15h com o Dr. Silva. Um lembrete será enviado no dia anterior. Posso ajudar com mais alguma coisa?</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 bottom-0 right-0 w-full h-full bg-gradient-to-t from-talkaio-blue/10 to-white/0 rounded-lg transform translate-y-4 translate-x-4 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
