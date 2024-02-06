import ItemList from './itemList'

const Content = ({ items, handlechecked, handleDelete }) => {




  const content = {
    textAlign: 'center',
    paddingTop: '20px',
  }

  return (
    <main style={content}>
      {items.length ? (
        <ItemList items={items} handlechecked={handlechecked} handleDelete={handleDelete} ></ItemList>
      ) : (
        <p style={{ marginTop: '2rem' }}> Your list is empty </p>
      )
      }

    </main>
  )
}

export default Content