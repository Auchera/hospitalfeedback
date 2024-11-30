import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, Button, TextField, MenuItem, Select, FormControl, InputLabel, TextareaAutosize, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ArrowForward, ArrowBack, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormControlLabel } from '@mui/material';



const OneriPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    status: '',
    poliklinik: '',
    sebep: '',
    personelBilgisi: '',
    detayliBilgi: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const steps = ['Kişisel Bilgiler', 'Geri Bildirim'];

  const handleNext = () => {
    if (activeStep === 0) {

      const newErrors = {};
      if (!formData.firstName) newErrors.firstName = 'Bu alanın doldurulması zorunludur';
      if (!formData.lastName) newErrors.lastName = 'Bu alanın doldurulması zorunludur';
      if (!formData.phone || formData.phone.length !== 10 || !formData.phone.startsWith('5')) {
        newErrors.phone = 'Geçersiz telefon numarası';
      }
      if (!formData.status) newErrors.status = 'Bu alanın doldurulması zorunludur';
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 1) {
      setIsFormSubmitted(true);
      setOpenModal(true);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {

      navigate('/');
    } else {
      setActiveStep(activeStep - 1);
    }
  };
  

  useEffect(() => {
    let timer;
    if (openModal) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigate('/'); 
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [openModal, navigate]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
return (
    <div className="bg-[#243240] text-smoke-white h-screen flex flex-col items-center justify-center font-roboto">
      <h1 className="text-white text-3xl" >RACCOON CITY ÖZEL HASTANESİ</h1>
      <h2 className='text-slate-400 text-3xl'>Öneri Formu</h2>
      <img src="/images/hastaneicon.png" alt="Hastane Logo" className="mx-auto " />

      <Stepper activeStep={activeStep} alternativeLabel className="w-4/5">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  color: activeStep >= index ? '#ececec' : '#cccccc', 
                },
              }}
            >
            
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="w-full flex flex-col items-center mt-6">
 
      <div className="w-4/5 h-[1px] bg-gray-300 mb-4"></div>

      <p className="text-lg text-white text-center mb-2">
        Değerlendirmeniz ile ilgili sizlere dönüş sağlamamızı istiyorsanız lütfen
        iletişim bilgilerinizi giriniz. Kişisel bilgilerinizi paylaşmak istemiyorsanız 
        kutucuğu işaretleyerek devam ediniz.
      </p>

      <FormControlLabel
        control={<Checkbox sx={{ color: '#ececec' }} />}
        label={
          <span className="text-lg text-white text-decoration-underline">
            Kişisel bilgilerimi paylaşmak istemiyorum.
          </span>
        }
      />
    </div>




      <div className="flex w-4/5 mt-6 gap-6">

        {activeStep === 0 && (
          <div className="w-full">
            <div className="flex gap-6">
              <div className="w-1/2 flex flex-col gap-5">
                <TextField
                  label="Adınız"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  required
                  placeholder="Adınızı girin"
                  className="mb-4"
                  InputProps={{
                    style: { fontSize: '14px', color: 'white' },
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'white',
                    },
                }}
                />
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email adresinizi girin"
                  className="mb-4"
                  InputProps={{
                    style: { fontSize: '14px', color: 'white' },
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'white',
                    },
                }}
                />
               
               <FormControl fullWidth className="mb-4" error={!!errors.status} required>
                <InputLabel sx={{ color: 'white' }}>Statü</InputLabel>
                 <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  sx={{
                    color: 'white', 
                     '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', 
                    },
                     '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'gray', 
                    },
                     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white', 
                     },
                   }}
                   >
                    <MenuItem value="Hasta">Hasta</MenuItem>
                    <MenuItem value="Hasta Yakını">Hasta Yakını</MenuItem>
                     <MenuItem value="Çalışan">Çalışan</MenuItem>
                   <MenuItem value="Ziyaretçi">Ziyaretçi</MenuItem>
                  </Select>
                </FormControl>

              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <TextField
                  label="Soyadınız"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  required
                  placeholder="Soyadınızı girin"
                  className="mb-4"
                  InputProps={{
                    style: { fontSize: '14px', color: 'white' },
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'white',
                    },
                }}
                  
                />
                <TextField
                  label="Telefon"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  required
                  placeholder="5554443322"
                  className="mb-4"
                  InputProps={{
                    style: { fontSize: '14px', color: 'white' },
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'white',
                    },
                }}
                />
              </div>
            </div>
          </div>
        )}


        {activeStep === 1 && (
          <div className="w-full">
            <div className="flex gap-6">

              <div className="w-1/2 flex flex-col gap-5">
                <FormControl fullWidth className="mb-4" required>
                  <InputLabel sx={{ color: 'white' }}>Poliklinik</InputLabel>
                  <Select
                    name="poliklinik"
                    value={formData.poliklinik}
                    onChange={handleChange}
                    sx={{
                      color: 'white', 
                       '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', 
                      },
                       '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'gray', 
                      },
                       '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', 
                       },
                     }}
                  >
                    <MenuItem value="Poliklinik 1">Poliklinik 1</MenuItem>
                    <MenuItem value="Poliklinik 2">Poliklinik 2</MenuItem>
                    <MenuItem value="Poliklinik 3">Poliklinik 3</MenuItem>
                    <MenuItem value="Poliklinik 4">Poliklinik 4</MenuItem>
                    <MenuItem value="Poliklinik 5">Poliklinik 5</MenuItem>
                  </Select>
                </FormControl>

              
                <FormControl fullWidth className="mb-4" required>
                  <InputLabel sx={{ color: 'white' }}>Sebep</InputLabel>
                  <Select
                    name="sebep"
                    value={formData.sebep}
                    onChange={handleChange}
                    sx={{
                      color: 'white', 
                       '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', 
                      },
                       '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'gray', 
                      },
                       '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white', 
                       },
                     }}
                  >
                    <MenuItem value="Kontrol">Kontrol</MenuItem>
                    <MenuItem value="İlaç">İlaç</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <TextField
                  label="Personel Bilgisi"
                  fullWidth
                  name="personelBilgisi"
                  value={formData.personelBilgisi}
                  onChange={handleChange}
                  placeholder="Personel hakkında geri bildirim"
                  className="mb-4"
                  InputProps={{
                    style: { fontSize: '14px', color: 'white' },
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    style: { color: 'white' },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'gray',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiFormHelperText-root': {
                        color: 'white',
                    },
                }}
                />
                <TextareaAutosize
                  name="detayliBilgi"
                  minRows={4}
                  placeholder="Detaylı bilgi"
                  value={formData.detayliBilgi}
                  onChange={handleChange}
                  className="w-full mb-4 p-2 bg-transparent border border-white rounded text-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-6">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          startIcon={<ArrowBack />}
          sx={{ fontSize: '14px', width: '160px' }}
        >
          Geri
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          endIcon={activeStep === 0 ? <ArrowForward /> : <CheckCircle />}
          sx={{ fontSize: '14px', width: '160px' }}
        >
          {activeStep === 0 ? 'Sonraki' : 'Gönder'}
        </Button>
      </div>

      <Dialog open={openModal} onClose={() => setOpenModal(false)} sx={{ color: 'white' }}>
  <DialogTitle sx={{ textAlign: 'center', color: 'green' }}>
    <CheckCircle sx={{ fontSize: 60, color: 'green', marginBottom: 2 }} />
    Formunuz başarıyla gönderildi.
  </DialogTitle>
  <DialogContent sx={{ textAlign: 'center', color: 'white' }}>
    <p style={{color:"black"}}>{countdown} saniye sonra anasayfaya yönlendiriliyorsunuz.</p>
  </DialogContent>
  <DialogActions sx={{ justifyContent: 'center' }}>
   
  </DialogActions>
</Dialog>
    </div>
  );
};

export default OneriPage;
