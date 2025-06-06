
import { PhoneOff, MessageSquare, Calendar, Users } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <PhoneOff size={48} className="text-talkaio-blue" />,
      title: "Menos chamadas, menos estresse",
      description: "Diminua o volume de ligações com respostas automáticas no WhatsApp."
    },
    {
      icon: <MessageSquare size={48} className="text-talkaio-blue" />,
      title: "Tudo registrado, tudo centralizado",
      description: "Histórico de conversas com pacientes sempre acessível."
    },
    {
      icon: <Calendar size={48} className="text-talkaio-blue" />,
      title: "Agendamentos confirmados sem esforço",
      description: "A IA cuida das confirmações e lembretes — mesmo fora do horário."
    },
    {
      icon: <Users size={48} className="text-talkaio-blue" />,
      title: "Equipe focada no que importa",
      description: "A recepção deixa de ser um \"call center\" e passa a cuidar da experiência do paciente."
    }
  ];

  return (
    <section className="bg-talkaio-gray section-padding" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Agilidade e organização no atendimento odontológico</h2>
          <p className="text-xl text-gray-600">Ao contratar a Talkaio, você terá:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-talkaio-dark">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
