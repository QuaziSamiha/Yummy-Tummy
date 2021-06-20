import React from 'react';
import './Story.css';
import storyImg from '../../../images/story.jpg';

const Story = () => {
    return (
        <section className='story-section text-center'>
            <h3>DISCOVER</h3>
            <h2>OUR STORY</h2>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-4 story-text'>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur odit autem repudiandae quasi quia sunt. Deserunt tempore odit nulla harum dolorem eum eveniet iste ex repellat sequi adipisci nisi facilis, provident vero aperiam dolor rem blanditiis saepe ducimus vitae dicta delectus atque laudantium odio. Non rerum mollitia natus iure.
                    </small>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4 story-img'>
                    <img src={storyImg} className='img-fluid' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Story;