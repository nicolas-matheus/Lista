import React from 'react';

function Sale({ name, price, discountPercentage }) {


    return (
        <div className="App">
            <p>Nome: {name}</p>
            {price > 1 && <p>Preço: R$ {price}</p>}
            {discountPercentage && <p>Desconto: {discountPercentage}</p>}
        </div>
    );
}

export default Sale;
