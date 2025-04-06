export default function Team() {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Know about Developers!</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <img src="/images/sami.jpg" alt="Sami Banjare" className="mx-auto rounded-full w-24 h-24 object-cover mb-2" />
            <h3 className="font-semibold">Sami Banjare</h3>
            <a href="mailto:sami@safeherbilaspur.com" className="text-blue-600 text-sm">Email</a>
          </div>
          <div className="text-center">
            <img src="/images/duru.jpg" alt="Duruwashini Netam" className="mx-auto rounded-full w-24 h-24 object-cover mb-2" />
            <h3 className="font-semibold">Duruwashini Netam</h3>
            <a href="mailto:duruwashini@safeherbilaspur.com" className="text-blue-600 text-sm">Email</a>
          </div>
          <div className="text-center">
            <img src="/images/shum.jpg" alt="Shumonto Pradhan" className="mx-auto rounded-full w-24 h-24 object-cover mb-2" />
            <h3 className="font-semibold">Shumonto Pradhan</h3>
            <a href="mailto:shumonto@safeherbilaspur.com" className="text-blue-600 text-sm">Email</a>
          </div>
        </div>
      </section>
    );
  }
  