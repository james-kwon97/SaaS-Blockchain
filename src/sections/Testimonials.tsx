export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div>
          {[...new Array(3)].fill(0).map((_,index) => (<div>
            <blockquote>
              <p className="font-heading text-3xl font-black">The user experience is phenomenal, and the support team is always there to help. Highly recommended!</p>
              <cite>
                <div>
                  <div>
                    <div>avatar</div>
                  </div>
                  <div>Erica Wyatt</div>
                  <div>Product Manager - BlockLink</div>
                </div>
              </cite>
            </blockquote>
          </div>))}
        </div>
      </div>
    </section>
  )
}