import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import StarRating from './StarRating';
import ManualRating from './ManualRating';

const Cardcomment = () => {
  return (
    <div>
      <div>
        <div class="col-3">
          <div class="custom-box1 mt-5 mb-2 border">
            <div class="card-inner1">
              <p className='text-inner'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ex excepturi molestiae dolore quo, sed eum
                reprehenderit beatae neque iure. Rerum tempora ea quia porro
                ducimus voluptas libero! Voluptatem, maiores?
              </p>
              <div className="row text-card mx-2">
                <div>
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <h6 style={{ fontSize: '18px' }}>
                        {' '}
                        Patio Design Timber
                      </h6>
                      <ManualRating/>
                    </div>
                    <h6 style={{opacity:'50%'}}>SSE</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardcomment;
