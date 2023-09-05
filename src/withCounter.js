import React from 'react';

const withCounter = (OriginalComponent, value) => {
  function NewComponent() {
    const [count, setCount] = React.useState(10);

    return (
      <OriginalComponent
        count={count}
        name="Ish"
        incrementCount={() => setCount((prevCount) => prevCount + value)}
      />
    );
  }

  return NewComponent;
};

export default withCounter;
