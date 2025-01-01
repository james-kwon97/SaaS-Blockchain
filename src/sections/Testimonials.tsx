export const TestimonialsSection = () => {
  return <section>
    <div>
      {[...new Array(3)].fill(0).map((_,index) => (<div>
        <blockquote>
          <p>The user experience is phenomenal, and the support team is always there to help. Highly recommended!</p>
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
  </section>
}