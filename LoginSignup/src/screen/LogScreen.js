import React, {useState} from "react";
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';


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





// colors
const {primary, secondary, thirdly, darkLight, brand, crimson, scarlet} = Colors;


const LogScreen = () => {
   
   const [hidePassword, setHidePassword] = useState(true);


      return(
            
        <StyledContainer>
               <StatusBar style="dark"/>

            <InnerContainer>
              <TopImage resizeMode="cover" source={require('./../assets/vector.png')} />
              <BotImage resizeMode="cover" source={require('./../assets/Vector 2.png')} />
              <PageLogo resizeMode="cover" source={require('./../assets/logo.jpg')} />
              <PageTitle>Zynerateur</PageTitle>

              <SubTitle>Account Login</SubTitle>
              
              <Formik
                 initialValues={{email:'', password:''}}
                 onSubmit={(values) => {console.log(values)
                 }}
              >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>

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

                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                
                <StyledButton google={true} onPress={handleSubmit}>
                  
                  <ButtonText >Sign in with Google
                  </ButtonText>
                </StyledButton>

                <ExtraView>
                    <ExtraText>Don't have an account already? </ExtraText>
                    <TextLink>SignUp</TextLink>
                </ExtraView>
              
              </StyledFormArea>)}

              </Formik>
            </InnerContainer>
        </StyledContainer>

      );
}


const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
      <View>
        

        <StyledTextLabel>{label}</StyledTextLabel>
        <StyledTextInput {...props}/>


      </View>
    );

};

export default LogScreen;