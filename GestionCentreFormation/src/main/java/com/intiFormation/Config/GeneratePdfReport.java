package com.intiFormation.Config;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.jasper.tagplugins.jstl.core.Url;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Participant;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;

import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.Jpeg;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.parser.clipper.Path;
import com.itextpdf.text.pdf.parser.clipper.Paths;




public class GeneratePdfReport {
	
	//sert en cas d'erreur ou d'exception
	private static final Logger logger = LoggerFactory.getLogger(GeneratePdfReport.class);

	
    public static ByteArrayInputStream commandesReport(Formation f,Participant p) {

        Document document = new Document();
        //The data will be written to ByteArrayOutputStream.
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
        	Font font = FontFactory.getFont(FontFactory.TIMES_BOLD, 12, BaseColor.BLACK);
        	Chunk chunk = new Chunk(" "+p.getNom().toUpperCase()+" "+p.getPrenom()+" a réussi sa formation "+
        	f.getLibFormation()+" avec succès", font);
        	//String s="https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180234909/96556753-sceau-dipl%C3%B4me-isol%C3%A9-ic%C3%B4ne-du-design-illustration-vectorielle.jpg";
        	chunk.setHorizontalScaling(Element.ALIGN_CENTER);

        	
        	/*
        	Path path = Paths.get(ClassLoader.getSystemResource("Java_logo.png").toURI());
        	PdfWriter.getInstance(document, new FileOutputStream("iTextImageExample.pdf"));

        	Image img = Image.getInstance(path.toAbsolutePath().toString());
        	*/
        	
        	
            
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(chunk);
            //document.add(img);
            document.close();

        } catch (DocumentException ex) {
        	//message d'erreur
            logger.error("Error occurred: {0}", ex);
        }
        //In the end, the data is returned as ByteArrayInputStream.
        return new ByteArrayInputStream(out.toByteArray());
    }
    
    

}
