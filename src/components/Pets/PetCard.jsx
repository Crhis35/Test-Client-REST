import React from 'react';
import { Skeleton, Card, Avatar } from 'antd';

import PetImage from '../../assets/pet.jpeg';

const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const PetCard = ({ loading, pet }) => {
  const { name, category } = pet;
  return (
    <Card.Grid style={gridStyle}>
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar src={PetImage} />}
          title={name || 'Pet Name'}
          description={category?.name}
        />
      </Skeleton>
    </Card.Grid>
  );
};

export default PetCard;
