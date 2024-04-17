import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {View, TouchableOpacity} from 'react-native';


// calendar
import DateTimePicker from '@react-native-community/datetimepicker';


//formik
import {Formik} from 'formik'





import {
     StyledContainer,
     InnerContainer,
     PageLogo,
     PageTitle,
     TopImage,
     SubTitle,
     StyledFormArea,
     LeftIcon,
     StyledButton,
     StyledTextLabel,
     RightIcon,
     ButtonText,
     Colors,
     StyledTextInput,
     BotImage,
     MsgBox,
     Line,
     ExtraText,
     ExtraView,
     TextLink,
     TextLinkContent,
     
} from '../../Component/styles';
import { Touchable } from "react-native";





// colors
const {primary, secondary, thirdly, darkLight, brand, crimson, scarlet} = Colors;


const SignupScreen = () => {
   
   const [hidePassword, setHidePassword] = useState(true);
   const [show, setShow] = useState(false);
   const [date, setDate] = useState(new Date(2000, 0, 1));


   // Actual date of birth to be sent
   const[dob, setDob] = useState();

   const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
   }

   const showDatePicker = () =>{
    setShow(true);
   }

      return( 
        <StyledContainer>
               

            <InnerContainer>
              <PageTitle>Zynerateur</PageTitle>
              <SubTitle>Account SignUp</SubTitle>


              {show && (
         <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
          />
        )}
              
              <Formik
                 initialValues={{fullName: '', email:'', dateofBirth:'', password:'', confirmPassword:''}}
                 onSubmit={(values) => {console.log(values)
                 }}
              >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>

                <MyTextInput 
                  label="Full Name"
                 
                  placeholder="Ex: Richard Hound"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}

                />
                <MyTextInput 
                  label="Email Address"
                 
                  placeholder="zyn@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"

                />
                <MyTextInput 
                  label="Date of Birth"
                 
                  placeholder="YYYY - MM - DD"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('dateofBirth')}
                  onBlur={handleBlur('dateofBirth')}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
                />

                <MyTextInput 
                  label="Password"
                  
                  placeholder="* * * * * * * * "
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}

                />
                <MyTextInput 
                  label="Confirm Password"
                  
                  placeholder="* * * * * * * * "
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}

                />

                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />

                <ExtraView>
                    <ExtraText>Already have an account? </ExtraText>
                    <TextLink>
                         <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                </ExtraView>
              
              </StyledFormArea>)}

              </Formik>
            </InnerContainer>
        </StyledContainer>

      );
}


const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return(
      <View>
        

        <StyledTextLabel>{label}</StyledTextLabel>
        {!isDate && <StyledTextInput {...props} />}
        {isDate && <TouchableOpacity onPress={showDatePicker}>
               <StyledTextInput {...props} />
            </TouchableOpacity>}


      </View>
    );

};

export default SignupScreen;