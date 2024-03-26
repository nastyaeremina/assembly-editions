import React, { useState } from 'react';
import logo1 from '../../../public/images/newtestimoniallogo1.svg';
import logo2 from '../../../public/images/newtestimoniallogo2.svg';
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
  const [currentTestimonial, setCurrentTestimomial] = useState(tableData[0]);
  return (
    <TestimonialMainBox>
      {tableData.map((item, index) => {
        return (
          <React.Fragment
            key={`testinomial_index_${stringToSlugyfy(currentTestimonial.name)}_${stringToSlugyfy(
              currentTestimonial.role
            )}`}>
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
              isHideMobile={mobile && index < 10}
              onClick={() => {
                setCurrentTestimomial(item);
              }}
            />
          </React.Fragment>
        );
      })}
    </TestimonialMainBox>
  );
}
