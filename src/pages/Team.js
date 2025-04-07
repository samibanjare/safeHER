export default function Team() {
    return (
      <section className="p-8">
        <h2 className="text-center font-bold mb-6">Know about Developers!</h2>
        <div className="team-members">

          <div className="team-card">
            <div className="team-img w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-5">
            <img src="/images/sami.jpg" alt="Sami Banjare" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Sami Banjare</h3>
            <div className="team-contact">
            <a href="mailto:sami@safeherbilaspur.com" className="text-blue-600 text-sm"><i class="fas fa-envelope"></i>Email</a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-img w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-5">
            <img src="/images/duru.jpg" alt="Duruwashini Netam" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Duruwashini Netam</h3>
            <div className="team-contact">
            <a href="mailto:duruwashini@safeherbilaspur.com" className="text-blue-600 text-sm"><i class="fas fa-envelope"></i>Email</a>
            </div>
          </div>

          <div className="team-card">
            <div className="team-img w-[150px] h-[150px] rounded-full overflow-hidden mx-auto mb-5">
            <img src="/images/shum.jpg" alt="Shumonto Pradhan" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">Shumonto Pradhan</h3>
            <div className="team-contact">
            <a href="mailto:shumonto@safeherbilaspur.com" className="text-blue-600 text-sm"><i class="fas fa-envelope"></i>Email</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  