import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DownloaderService } from '../downloader.service';

interface Format {
    name: string;
    key: string;
}

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

    formats: Format[];
    selectedFormat: string;
    downLoadUrl: string;
    link: string;


    constructor(private downloaderService: DownloaderService, private sanitazion: DomSanitizer
    ) {

        this.formats = [
            { name: 'Video', key: 'video' },
            { name: 'Audio', key: 'audio' },
        ];
    }
    ngOnInit(): void {
        this.selectedFormat = this.formats[0].key;

        this.downLoadUrl = 'http://192.168.178.38:8000/download?'
    }

    download() {
        console.log(`DOWNLOADING - ${this.link} in format ${this.selectedFormat}`);




        this.downloaderService.downloadFormat(this.selectedFormat, this.link).then(data => {

            console.log(`SUCCESS `);

            //this.ref.close({ type: this.type, success: true, time: appointement.time, date: appointement.date, bookingnumber: appointement.bookingnumber });
        }).catch(error => {
            console.log(`ERROR - ${JSON.stringify(error)}`);
            //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fehler beim Aktualisieren der Daten' });
        }).finally(() => {
            console.log("FINISHED");
            //this.isLoading = false;
        });;
    }

}
