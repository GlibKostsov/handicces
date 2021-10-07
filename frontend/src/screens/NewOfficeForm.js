import Card from '../components/UI/Card'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import classes from './NewOfficeForm.module.css'
import { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { Link } from 'react-router-dom'
const NewOfficeForm = () => {
  const [formActive, setFormActive] = useState(true)

  const nouveauCalculHandler = () => {}
  const annulerHandler = () => {}

  return (
    <form noValidate autoComplete='off' className={classes.form}>
      <TextField
        style={{ marginTop: '1rem' }}
        id='libelle'
        label='Libellé'
        variant='outlined'
      />
      <TextField
        style={{ marginTop: '1rem' }}
        id='image-1'
        label='Image 1'
        variant='outlined'
      />
      <TextField
        style={{ marginTop: '1rem' }}
        id='image-2'
        label='Image 2'
        variant='outlined'
      />
      <TextField
        style={{ marginTop: '1rem' }}
        id='image-3'
        label='Image 3'
        variant='outlined'
      />
      <TextField
        style={{ marginTop: '1rem' }}
        id='image-4'
        label='Image 4'
        variant='outlined'
      />
      <TextField
        style={{ margin: '2rem 0' }}
        id='description'
        label='Description'
        multiline
        rows={4}
        variant='outlined'
      />
      <FormControlLabel
        control={<Checkbox name='SomeName' value='SomeValue' />}
        label='Tapis roulants, escaliers et plans inclinés mécaniques'
      />
      <FormControlLabel
        control={<Checkbox name='SomeName' value='SomeValue' />}
        label='Revêtements sols, murs et plafonds'
      />
      <FormControlLabel
        control={<Checkbox name='SomeName' value='SomeValue' />}
        label='Circulations intérieures verticales'
      />
      <FormControlLabel
        control={<Checkbox name='SomeName' value='SomeValue' />}
        label='Portes, portiques et sas'
      />

      <div className={classes.action}>
        <Link to={'/home'}>
          <button type='submit'>Ajouter</button>
        </Link>
        <button onClick={annulerHandler}>Annuler</button>
      </div>
    </form>
  )
}

export default NewOfficeForm
