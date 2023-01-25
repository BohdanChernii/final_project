import React from 'react';
import {Box, Button, Dialog, FormGroup, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IForm {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();
const Auth = () => {
  const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    }
  })
  return (
    <div>
      <div className="authorization">
        <Dialog
          open={true}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >

          <Box sx={{
            margin: 'auto',
            padding: '25px',
            boxSizing: 'border-box',
            width: '252px',
            // height: '262px',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f'
          }}>
            <form onSubmit={handleSubmit(
              () => reset()
            )} style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: '20px'
            }}>
              <TextField
                id="email"
                label="Email"
                {...register('email', {required: true,})}
                multiline
                maxRows={4}
                error={errors.email?.message ? true : false}
                required
              />
              <TextField
                id="password"
                label="Password"
                {...register('password', {required: true})}
                multiline
                maxRows={4}
                error={errors.password?.message ? true : false}
                required
              />

              {errors.email?.message || errors.password?.message ? <p
                style={{
                  color: 'red'
                }}>Incorrect email or password</p> : null}

              <Button
                type='submit'
                variant="contained"
                sx={{
                  height: '34px',
                  width: '68px',

                  marginLeft: 'auto',
                  color: '#fff',
                  background: '#3f51b5',
                  border: 'none',
                  borderRadius: '5px',
                }}>Login
              </Button>

            </form>
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default Auth;