import './Services.css';

export default function Services() {
    return (
        <div className="Services d-flex w-75 mt-5 mx-auto">
            <div className="service-card bg-black w-50">
                <h3>Haircut <span>$55 - $65</span></h3>
                <p>Haircut service includes an in-depth consultation, full cut with clippers and/or shears, cleaning up the back of the neck(nape), drying and styling with products. Eyebrows cleaned/trimmed upon request. Shampoo/rinse if needed/requested.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Transformation <span>$75 - $86</span></h3>
                <p>Haircut service includes an in-depth consultation, full cut with clippers and/or shears, cleaning up the back of the neck(nape), drying and styling with products. Eyebrows cleaned/trimmed upon request. Shampoo/rinse if needed/requested.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Back & Sides <span>$40 - $45</span></h3>
                <p>Back & Sides service is when we use clippers and/or shears on the back & sides of the head up until the parietal ridge. The top is not touched.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Buzz <span>$35</span></h3>
                <p>A buzz is one guard on the clipper all around the back, sides and top.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Beard Trim <span>$35</span></h3>
                <p>Clippers, trimmers and scissor work on the beard. Straight razor if needed.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Kid&apos;s Haircut <span>$45 - $55</span></h3>
                <p>Only applies to children ages 12 and under.</p>
            </div>
            <div className="service-card bg-black w-50">
                <h3>Clean Up <span>$20</span></h3>
                <p>A clean up consists of cutting around the sideburns, ears and the back of the neck (nape). This service is only available to walk-ins.</p>
            </div>
        </div>
    )
}