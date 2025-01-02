const testimonials = [
  {
    text: 'The user experience is phenomenal, and the support team is always there to help. Highly recommended!',
    name: 'Erica Wyatt',
    title: 'Product Manager - BlockLink',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg',
  },{
    text: 'Our productivity has skyrocketed since we started using Blockforge. It\'s a game-changer for our team.',
    name: 'Noel Williams',
    title: 'Lead Developer - BitBridge',
    avatarImage: '/assets/images/avatar-noel-williams.jpg',
  },{text: 'The integration process was seamless, and the performance improvements are beyond our expectations.',
    name: 'Tom Halters',
    title: 'CTO - CryptoSolutions',
    avatarImage: '/assets/images/avatar-tom-halters.jpg',}
]

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((testimonial,testimonialIndex) => (<div>
            <blockquote key={testimonialIndex}>
              <p className="font-heading text-3xl font-black">&ldquo;{testimonial.text}&rdquo;</p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div className="size-16 bg-zinc-700 rounded-full bg-cover" style={{backgroundImage: `url(${testimonial.avatarImage})`}}></div>
                  </div>
                  <div className="text-lg not-italic font-black ">{testimonial.name}</div>
                  <div className="text-zinc-400 not-italic">{testimonial.title}</div>
                </div>
              </cite>
            </blockquote>
          </div>))}
        </div>
      </div>
    </section>
  )
}