
import { CheckCircle } from 'lucide-react';

export default function Problem() {
  const painPoints = [
    "O WhatsApp da clínica respondesse sozinho as perguntas frequentes",
    "O sistema confirmasse as consultas automaticamente",
    "Os lembretes fossem enviados no horário certo, todos os dias",
    "E sua equipe só precisasse intervir nos casos realmente importantes"
  ];

  return (
    <section className="bg-white section-padding" id="problem">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Seu consultório ainda depende da secretária para tudo?</h2>
          <p className="text-xl text-gray-600">
            Se você respondeu que sim na sua cabeça, imagine se:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <CheckCircle className="text-talkaio-blue mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">{point}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xl font-medium text-talkaio-blue">
            É isso que a Talkaio faz por você.
          </p>
        </div>
      </div>
    </section>
  );
}
