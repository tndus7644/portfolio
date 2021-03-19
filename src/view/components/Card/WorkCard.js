import React from 'react';
import styled from 'styled-components';
import Tags from "../Tags";
import {setBoxShadow} from "../../../styled/Util.Styled";

const WorkCard = ({name, description, url, tags, imgSrc}) => {

    return (
        <Container>
            <Thumb href={url} target={'_blank'} rel={"noreferrer"}>
                <img src={imgSrc} alt=""/>
            </Thumb>
            <Desc>
                <h3>
                    <a href={url} target={'_blank'} rel={"noreferrer"}>
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
  border-radius: 4px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`;

const Thumb = styled.a`
  display: flex;
  overflow: hidden;

  img {
    height: 230px;
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
      color: #333;

      &:hover {
        color: #18f;
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