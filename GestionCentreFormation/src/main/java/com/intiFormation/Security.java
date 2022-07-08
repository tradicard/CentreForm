package com.intiFormation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.intiFormation.Config.RequestFilter;



@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter{
	
	@Autowired
	@Qualifier("us")
	UserDetailsService userdetailservice;
	
	@Autowired
	private RequestFilter jwtrequestfilter;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		
		auth.userDetailsService(userdetailservice);
	}
	
	
	@Bean
	public BCryptPasswordEncoder  passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}
	
	
	
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManager();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable().authorizeRequests()
		.antMatchers("/imageproduit/**").permitAll()
		
		//.antMatchers("/addUtilisateur").permitAll()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		//.antMatchers("/AcceuilAdmin")
		.antMatchers("/authenticate").permitAll()
		.antMatchers("/api/utilisateurs/**").hasAuthority("admin")
		.antMatchers("/api/utilisateursus/**").permitAll()
		.antMatchers("/api/assistantsus/**").permitAll()
		//.antMatchers("/api/assistants/**").permitAll()
		//.antMatchers("/api/participants/**").permitAll()
		//.antMatchers("/api/formateurs/**").permitAll()
		//.antMatchers("/api/formations/**").permitAll()
		//.antMatchers("/api/commercials/**").permitAll()
		//.antMatchers("/api/contacts/**").permitAll()
		//.antMatchers("/api/historiqueparticipants/**").permitAll()
		//.antMatchers("/api/historiquesformateurs/**").permitAll()
		//.antMatchers("/api/paiements/**").permitAll()
		//.antMatchers("/api/prospoects/**").permitAll()
		//.antMatchers("/api/relances/**").permitAll()
		//.antMatchers("/api/roles/**").permitAll()
		//.antMatchers("/GiveScheduleEmailRequest/**").permitAll()
		//.antMatchers("/sendSimpleEmail/**").permitAll()
		//.antMatchers("/sendSimpleEmailRelancePaiement/**").permitAll()
		//.antMatchers("/**").permitAll()
		
		
		.anyRequest().authenticated()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().addFilterBefore(jwtrequestfilter, UsernamePasswordAuthenticationFilter.class);
		
		
	}

}
