import React, { useState, useEffect } from 'react';
import { TestimonialMainBox } from './styles';
import TableData from './tableData';
import TestimonialCenterBox from './testimonialCenterBox';
import useMobileDevice from '../../hooks/useMobileDevice';
import { stringToSlugyfy } from '../../helpers/helpers';

/**  [{
  name
  role
  industry
  imageHeadshot{
    url
  }
  logo{
    url
  }
  quoteNew
}] */
export default function TestimonialTable({ tableData }) {
  const mobile = useMobileDevice();
  const [currentTestimonial, setCurrentTestimonial] = useState(tableData[0]);

  useEffect(()=>{
    if(mobile){
      //in mobile show only last 8 cards sothat active card is 11th card
      setCurrentTestimonial(tableData[10]);
    }else{
      setCurrentTestimonial(tableData[0]);
    }
  },[mobile,tableData])

  return (
    <TestimonialMainBox>
      {tableData.map((item, index) => {
        return (
          <React.Fragment key={`testinomial_index_${stringToSlugyfy(item.name)}_${stringToSlugyfy(item.role)}`}>
            {((mobile && index === 0) || (!mobile && index === 5)) && (
              <TestimonialCenterBox
                logoUrl={currentTestimonial.logo?.url}
                quote={currentTestimonial.quoteNew}
                personName={currentTestimonial.name}
                personRole={currentTestimonial.role}
                personProfile={currentTestimonial.imageHeadshot?.url}
              />
            )}

            <TableData
              isActive={currentTestimonial === item}
              logoUrl={item.logo?.url}
              onClick={() => {
                setCurrentTestimonial(item);
              }}
            />
          </React.Fragment>
        );
      })}
    </TestimonialMainBox>
  );
}
