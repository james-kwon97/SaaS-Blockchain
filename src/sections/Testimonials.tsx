const testimonials = [
  {
    text: 'The user experience is phenomenal, and the support team is always there to help. Highly recommended!',
    name: 'Erica Wyatt',
    title: 'Product Manager - BlockLink',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg'
  },{},{}
]

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((testimonial,testimonialIndex) => (<div>
            <blockquote key={testimonialIndex}>
              <p className="font-heading text-3xl font-black">&ldquo;{testimonial.text}&rdquo;</p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div className="size-16 bg-zinc-700 rounded-full" style={{backgroundImage: `url(${testimonial.avatarImage})`}}></div>
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