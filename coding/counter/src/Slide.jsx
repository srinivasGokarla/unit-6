import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css'


export const Slide =()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        
        slidesToShow: 5,
        slidesToScroll: 1
      }
      return (
        <div>
        <br />
          <Slider className="slider_articles" {...settings}>
            <div className="slider_div">
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51980-featured-700x400.jpg" />
           <div className="sliding_text">How to Get Weight Loss Motivation Back in February</div>
            </div>
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51992-featured-700x400.jpg" />
           <div className="sliding_text">5 Active Winter Activities to Do With Friends and Family</div>
            </div>
            <div className="slider_div">
             
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/48779-featured-700x400.jpg" />
              <div className="sliding_text">Slow Cooker Italian Beef Stew</div>
            </div>
           
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51990-featured-700x400.jpg" />
              <div className="sliding_text">Is Wine Actually Good for You?</div>
            </div>
            <div className="slider_div">
             
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51983-featured-700x400.jpg" />
              <div className="sliding_text">The Lunge Workout</div>
            </div>
            <div className="slider_div">
              
              <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51987-featured-700x400.jpg" />
              <div className="sliding_text">Forget Salads: Ways to Get Your (Warm) Greens In</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/27077-featured-700x400.jpg"/>
                <div className="sliding_text">Essential Guide to MyFitnessPal Premium</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/48688-featured-700x400.jpg" />
                <div className="sliding_text">9 Habits to Supercharge Weight Loss the Right Way</div>
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/51767-featured-700x400.jpg" />
                <div className="sliding_text">5 Popular Weight-Loss Plans, Ranked By RDs</div> 
            </div>
            <div className="slider_div">
                <img className="sliding_img" src="https://blog.myfitnesspal.com/wp-content/uploads/wordpress-popular-posts/52003-featured-700x400.jpg" />
                <div className="sliding_text">After Losing 220 Pounds, JC Is Paying it Forward</div>
            </div>
            
            </Slider>
            <br />
        </div>
      );
    }