

const Blockchainlist = ()=> {

    const chainList = [
        { id: 1, name:"ETH"},
        { id: 2, name:"SOL"},
        { id: 3, name:"DOT"},
        { id: 4, name:"VCHAIN"}
    ];

    return (
      <div>
         <ul>
            { chainList.map((item)=> {
                return <li>{item.name}</li>
            }) }
         </ul>
      </div>
    );
}

export default Blockchainlist;