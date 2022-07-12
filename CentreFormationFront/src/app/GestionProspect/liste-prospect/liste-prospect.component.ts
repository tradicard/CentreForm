import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { Utilisateur } from 'src/app/models/utilisateur';
import { CsvService } from 'src/app/service/csv.service';
import { ProspectService } from 'src/app/service/prospect.service';

@Component({
  selector: 'app-liste-prospect',
  templateUrl: './liste-prospect.component.html',
  styleUrls: ['./liste-prospect.component.css']
})
export class ListeProspectComponent implements OnInit {
prospects!:Prospect[]
prospect!:Prospect
csv_prospect!:Prospect
  constructor(private router:Router,private service:ProspectService, private _csvService:CsvService) { }

  ngOnInit(): void {
    this.recuperer()
    this.prospect=new Prospect()
    
    
  }

  recuperer(){
    this.service.getAll().subscribe(
      response=>{this.prospects=response
      console.log(this.prospects[0])}
    )
  }
  cont(idProspect:number){
    this.router.navigateByUrl('contactduProspect/'+idProspect)
  }

  modif(idProspect:number){
    this.router.navigateByUrl('modifierProspect/'+idProspect)
  }

  suppr (idProspect:number){
    this.service.supprimer(idProspect).subscribe(
      response=>this.recuperer()
    )
  }

  SaveProspect(){
    this.service.ajouter(this.prospect).subscribe(response=>{this.recuperer()})
  }

  public importedData:Array<any> = [];

  public saveDataInCSV(name: string, data: Array<any>): void {
    let csvContent = this._csvService.saveDataInCSV(data);

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenElement.target = '_blank';
    hiddenElement.download = name + '.csv';
    hiddenElement.click();
  }

  public saveProspectInCSV(): void {
    for (let i=0;i<this.importedData.length-1;i++){
    this.csv_prospect=this.importedData[i]
    console.log(this.csv_prospect)
    this.service.ajouter(this.csv_prospect).subscribe()}
    location.reload()
  }

  public async importDataFromCSV(event: any) {
    let fileContent = await this.getTextFromFile(event);
    this.importedData = this._csvService.importDataFromCSV(fileContent);
  }


  private async getTextFromFile(event:any){
    const file: File = event.target.files[0];
    let fileContent = await file.text();

    return fileContent;
  }

}
