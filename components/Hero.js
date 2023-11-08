import Image from 'next/image'

export default function Hero() {

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
            <h1 className="hero-title">Get the right local pro in your area for any project.</h1>
            <div className="form-section">
              <form>
                    <input  type="text" name="search-query" placeholder="Search Service" className="input-box"/>
                    <button > SEARCH </button>
              </form>
              <div className='p-text'>
                <p>We have the best SKILLS and custom services for your PROJECT <span>Go Premium</span> </p>
                <Image src="/assets/images/star.svg" width={50} height={50}  alt="mr. kim logo" className="image" priority/>
              </div>
            </div>
        </div>
        <div className="hero-right">
            <div className='swipe'>
            
            </div>
        </div>
      </div>
    </section>
  )
}
