import React from 'react'
import './Membershipp.css'
import Button from '../../components/Button/Button'
function Membership() {
    const MemberGrid = ({name , cost , img , benefit1 , benefit2 , benefit3 }) => 
    {
        return (
            <div className='member-grid'>
                <img className='member-img' src={img} alt="Img"/>
                <h5 className='member-name'>{name}</h5>
                <h3 className='member-cost'>{cost}</h3>
                <span className='member-benefit'>{benefit1}</span>
                <span className='member-benefit'>{benefit2}</span>
                <span className='member-benefit'>{benefit3}</span>
                <Button text="Buy Now!!"/>
            </div>
        )
    }
    return (
        <div className="membership">
            <h3 className='membership-heading'>Our Membership Plans</h3>
            <div className='member-allgrid'>
                <MemberGrid name="Monthly" cost="RS 10,104" img="/monthly.avif" benefit1="+ Diet Meal Plan"/>
                <MemberGrid name="Quarterly" cost="RS 20,104" img="/quarterly.avif" benefit1="+ Diet Meal Plan" benefit2="+ Personal Regimen"/>
                <MemberGrid name="Yearly" cost="RS 50,104" img="/yearly.avif" benefit1="+ Diet Meal Plan" benefit2="+ Personal Regimen" benefit3="+ Personal Trainer"/>
                <MemberGrid name="Lifetime" cost="RS 1,10,104" img="/lifetime.avif" benefit1="+ Diet Meal Plan" benefit2="+ Personal Regimen" benefit3="+ Personal Trainer"/>
            </div>
        </div>
    )
}

export default Membership