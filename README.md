# React Native DCSL Hackathon 2022

# Environment Set Up
Please following the instructions at the following url:
    
    https://reactnative.dev/docs/environment-setup

Requirement:

    node version 16

    In order to run ios APP, you will need to have a Mac OS.

# Project Set up
  1. At project level, run command:
    
    yarn install or npm install
    
  2. IOS config:
        
    cd ios && pod install

# How to run project

## Android
  Run the following command at project level

    yarn/npm android

## Ios
    Run the following command at project level

    yarn/npm ios

if either command fails to run, please open Xcode/Android studio and run the app from the OS IDE.

# Project Structure

The project follows a clean domain/ hexagonal structure. Please see below for more detail structure.

    src => (Main source of project)
      - common => (General common App config)
          - config
              - debug => (Confirguration that you want to apply while dev in local)
              - app_config => (Configuration apply to the project)
          - network
            - rest_api.network => (Axios REST Api)
            - socket.network => (Socket IO)
      - core => (Domain connections between UI and network in Common/netowrk)
          - user
            - models
            - repositoties
            - use_cases
          - onboarding
            - models
            - repositories
            - use_cases
      - ui
          - assets
          - components
          - hoc => (Higher order components)
          - navigation
          - screens
          - services
          - store => (Using React Context for centralized data storage)
          - styles
