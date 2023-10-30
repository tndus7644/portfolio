import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags";
import {setBoxShadow} from "../../../styled/Util.Styled";
import {Link} from "react-router-dom";

const WorkCard = ({name, description, url, tags, imgSrc}) => {

    return (
        <Container>
            <Thumb to={url}>
                <img src={imgSrc} alt=""/>
            </Thumb>
            <Desc>
                <h3>
                    <a href={url}>
                        {name}
                    </a>
                </h3>
                <p>{description}</p>
                <Tags tags={tags}/>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: ${setBoxShadow(1)};
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  a {
    text-decoration: none;
  }
`;

const Thumb = styled(Link)`
  display: flex;
  overflow: hidden;

  img {
    height: 260px;
    width: 100%;
    object-fit: cover;
    transition: 0.5s;
    
    &:hover{
      transform: scale(1.03);
    }
  }
`;

const Desc = styled.div`
  padding: 22px 20px 10px;

  h3 {
    margin-bottom: 10px;

    a {
      font-size: 20px;
      font-weight: 500;

      &:hover {
        color: #ff8644;
      }
    }
  }
  
  p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export default WorkCard;