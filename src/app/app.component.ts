import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeSandbox';

  data = {
    Produto: {
      IdProduto: 8468459,
      Nome:
        'Smart TV LED 55" HDR Ultra HD 4K Sony + Suporte Bi-Articulado de Parede para TVs de 10” a 55” + Suporte DVD + Cabo HDMI',
      Categoria: {
        IdCategoria: 1,
        Nome: 'TV e Vídeo',
        NomeReal: 'TV e Vídeo',
        Categoria: {
          IdCategoria: 2,
          Nome: 'TVs',
          NomeReal: 'Televisores',
          Categoria: {
            IdCategoria: 2536,
            Nome: 'TV 4K',
            NomeReal: 'TV 4K',
            Categoria: null
          }
        }
      },
      Marca: {
        IdMarca: 497,
        Nome: 'Sony',
        TextoLink: null,
        Texto: 'produtos de eletronicos, informatica, DVDs',
        PalavraChave: 'eletronicos, informatica, DVDs',
        TituloSite: '',
        FlagAtiva: true,
        Contatos: null,
        LinkChat: null,
        Telefone:
          '4003 7669 para capitais e regiões metropolitanas \r\n0800 880 7669 RJ e demais localidades\r\n',
        EmailSite: '',
        ObservacaoSac: '',
        FlagExibirContato: true
      },
      Descricao:
        'Tenha o melhor do entretenimento com a <strong>TV 4K HDR X70E</strong> com YouTube™ integrado. A tecnologia e a transmissão premium X-Reality PRO elevam a qualidade de seu entretenimento favorito.\r\n\r\n<strong>Surpreenda-se com o real 4K</strong>\r\n\r\nA série X705E traz o melhor da tecnologia 4K para que você possa assistir qualquer conteúdo com muito mais qualidade de imagem.\r\n\r\nSmart TV 4K HDR de LED Ultra HD KD-55X705E série X705E.',
      Skus: [
        {
          IdSku: 1000067401,
          Nome:
            'Smart TV LED 55" HDR Ultra HD 4K Sony + Suporte Bi-Articulado de Parede para TVs de 10” a 55” + Suporte DVD + Cabo HDMI',
          NomeCompleto:
            'Smart TV LED 55" HDR Ultra HD 4K Sony + Suporte Bi-Articulado de Parede para TVs de 10” a 55” + Suporte DVD + Cabo HDMI',
          OrdemExibicao: 0,
          IdArquivoThumbnail: 0,
          FlagAtiva: false,
          Produto: null,
          SkuLojistas: [
            {
              Eleito: true,
              Lojista: {
                IdLojista: 10037,
                Nome: 'Casas Bahia',
                RetiraEmLojaParceiro: false,
                LojistaInternacional: false,
                LojistaGPA: true
              },
              PrecoAnterior: 4045.96,
              PrecoVenda: 4258.9,
              Fidelizado: false,
              LojistaGPA: false
            }
          ],
          Imagens: [
            {
              IdArquivo: 872784036,
              Nome: '1000067401_s',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784036',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784037,
              Nome: '1000067401_s',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784037',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784038,
              Nome: '1000067401_s',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784038',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784039,
              Nome: '1000067401_s',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784039',
              IdArquivoRelacionado: 872784036
            },
            {
              IdArquivo: 872784040,
              Nome: '1000067401_s',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784040',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784041,
              Nome: '1000067401_s',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784041',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784042,
              Nome: '1000067401_s',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784042',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784043,
              Nome: '1000067401_s',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784043',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784044,
              Nome: '1000067401_s',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784044',
              IdArquivoRelacionado: 872784036
            },
            {
              IdArquivo: 872783828,
              Nome: '1000067401_1xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783828',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783829,
              Nome: '1000067401_1xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783829',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783830,
              Nome: '1000067401_1xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783830',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783831,
              Nome: '1000067401_1xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783831',
              IdArquivoRelacionado: 872783828
            },
            {
              IdArquivo: 872783832,
              Nome: '1000067401_1xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783832',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783833,
              Nome: '1000067401_1xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783833',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783834,
              Nome: '1000067401_1xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783834',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783835,
              Nome: '1000067401_1xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783835',
              IdArquivoRelacionado: 872783826
            },
            {
              IdArquivo: 872783836,
              Nome: '1000067401_1xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783836',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783837,
              Nome: '1000067401_1xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783837',
              IdArquivoRelacionado: 872783828
            },
            {
              IdArquivo: 872783846,
              Nome: '1000067401_2xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783846',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783847,
              Nome: '1000067401_2xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783847',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783848,
              Nome: '1000067401_2xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783848',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783849,
              Nome: '1000067401_2xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783849',
              IdArquivoRelacionado: 872783846
            },
            {
              IdArquivo: 872783850,
              Nome: '1000067401_2xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783850',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783851,
              Nome: '1000067401_2xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783851',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783852,
              Nome: '1000067401_2xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783852',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783853,
              Nome: '1000067401_2xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783853',
              IdArquivoRelacionado: 872783855
            },
            {
              IdArquivo: 872783854,
              Nome: '1000067401_2xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783854',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783855,
              Nome: '1000067401_2xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783855',
              IdArquivoRelacionado: 872783846
            },
            {
              IdArquivo: 872783856,
              Nome: '1000067401_3xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783856',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783857,
              Nome: '1000067401_3xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783857',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783858,
              Nome: '1000067401_3xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783858',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783859,
              Nome: '1000067401_3xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783859',
              IdArquivoRelacionado: 872783856
            },
            {
              IdArquivo: 872783860,
              Nome: '1000067401_3xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783860',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783861,
              Nome: '1000067401_3xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783861',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783862,
              Nome: '1000067401_3xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783862',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783863,
              Nome: '1000067401_3xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783863',
              IdArquivoRelacionado: 872783865
            },
            {
              IdArquivo: 872783864,
              Nome: '1000067401_3xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783864',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783865,
              Nome: '1000067401_3xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783865',
              IdArquivoRelacionado: 872783856
            },
            {
              IdArquivo: 872783866,
              Nome: '1000067401_4xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783866',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783867,
              Nome: '1000067401_4xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783867',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783868,
              Nome: '1000067401_4xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783868',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783869,
              Nome: '1000067401_4xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783869',
              IdArquivoRelacionado: 872783866
            },
            {
              IdArquivo: 872783870,
              Nome: '1000067401_4xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783870',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783871,
              Nome: '1000067401_4xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783871',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783872,
              Nome: '1000067401_4xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783872',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783873,
              Nome: '1000067401_4xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783873',
              IdArquivoRelacionado: 872783875
            },
            {
              IdArquivo: 872783874,
              Nome: '1000067401_4xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783874',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783875,
              Nome: '1000067401_4xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783875',
              IdArquivoRelacionado: 872783866
            },
            {
              IdArquivo: 872783876,
              Nome: '1000067401_5xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783876',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783877,
              Nome: '1000067401_5xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783877',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783878,
              Nome: '1000067401_5xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783878',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783879,
              Nome: '1000067401_5xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783879',
              IdArquivoRelacionado: 872783876
            },
            {
              IdArquivo: 872783880,
              Nome: '1000067401_5xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783880',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783881,
              Nome: '1000067401_5xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783881',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783882,
              Nome: '1000067401_5xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783882',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783883,
              Nome: '1000067401_5xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783883',
              IdArquivoRelacionado: 872783885
            },
            {
              IdArquivo: 872783884,
              Nome: '1000067401_5xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783884',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783885,
              Nome: '1000067401_5xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783885',
              IdArquivoRelacionado: 872783876
            },
            {
              IdArquivo: 872783886,
              Nome: '1000067401_6xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783886',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783887,
              Nome: '1000067401_6xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783887',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783888,
              Nome: '1000067401_6xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783888',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783889,
              Nome: '1000067401_6xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783889',
              IdArquivoRelacionado: 872783886
            },
            {
              IdArquivo: 872783890,
              Nome: '1000067401_6xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783890',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783891,
              Nome: '1000067401_6xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783891',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783892,
              Nome: '1000067401_6xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783892',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783893,
              Nome: '1000067401_6xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783893',
              IdArquivoRelacionado: 872783895
            },
            {
              IdArquivo: 872783894,
              Nome: '1000067401_6xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783894',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783895,
              Nome: '1000067401_6xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783895',
              IdArquivoRelacionado: 872783886
            },
            {
              IdArquivo: 872783896,
              Nome: '1000067401_7xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783896',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783897,
              Nome: '1000067401_7xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783897',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783898,
              Nome: '1000067401_7xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783898',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783899,
              Nome: '1000067401_7xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783899',
              IdArquivoRelacionado: 872783896
            },
            {
              IdArquivo: 872783900,
              Nome: '1000067401_7xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783900',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783901,
              Nome: '1000067401_7xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783901',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783902,
              Nome: '1000067401_7xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783902',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783903,
              Nome: '1000067401_7xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783903',
              IdArquivoRelacionado: 872783905
            },
            {
              IdArquivo: 872783904,
              Nome: '1000067401_7xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783904',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783905,
              Nome: '1000067401_7xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783905',
              IdArquivoRelacionado: 872783896
            },
            {
              IdArquivo: 872783906,
              Nome: '1000067401_8xg',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783906',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783907,
              Nome: '1000067401_8xg',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783907',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783908,
              Nome: '1000067401_8xg',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783908',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783909,
              Nome: '1000067401_8xg',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783909',
              IdArquivoRelacionado: 872783906
            },
            {
              IdArquivo: 872783910,
              Nome: '1000067401_8xg',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783910',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783911,
              Nome: '1000067401_8xg',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783911',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783912,
              Nome: '1000067401_8xg',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783912',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783913,
              Nome: '1000067401_8xg',
              Largura: 1000,
              Altura: 1000,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783913',
              IdArquivoRelacionado: 872783915
            },
            {
              IdArquivo: 872783914,
              Nome: '1000067401_8xg',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783914',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783915,
              Nome: '1000067401_8xg',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783915',
              IdArquivoRelacionado: 872783906
            },
            {
              IdArquivo: 872783916,
              Nome: '1000067401_9g',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783916',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783917,
              Nome: '1000067401_9g',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783917',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783918,
              Nome: '1000067401_9g',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783918',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783919,
              Nome: '1000067401_9g',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783919',
              IdArquivoRelacionado: 872783916
            },
            {
              IdArquivo: 872783920,
              Nome: '1000067401_9g',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783920',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783921,
              Nome: '1000067401_9g',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783921',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783922,
              Nome: '1000067401_9g',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783922',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783923,
              Nome: '1000067401_9g',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783923',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783924,
              Nome: '1000067401_9g',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783924',
              IdArquivoRelacionado: 872783916
            },
            {
              IdArquivo: 872784018,
              Nome: '1000067401_12g',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784018',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784019,
              Nome: '1000067401_12g',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784019',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784020,
              Nome: '1000067401_12g',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784020',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784021,
              Nome: '1000067401_12g',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784021',
              IdArquivoRelacionado: 872784018
            },
            {
              IdArquivo: 872784022,
              Nome: '1000067401_12g',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784022',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784023,
              Nome: '1000067401_12g',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784023',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784024,
              Nome: '1000067401_12g',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784024',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784025,
              Nome: '1000067401_12g',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784025',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784026,
              Nome: '1000067401_12g',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784026',
              IdArquivoRelacionado: 872784018
            },
            {
              IdArquivo: 872784027,
              Nome: '1000067401_13g',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784027',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784028,
              Nome: '1000067401_13g',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784028',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784029,
              Nome: '1000067401_13g',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784029',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784030,
              Nome: '1000067401_13g',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784030',
              IdArquivoRelacionado: 872784027
            },
            {
              IdArquivo: 872784031,
              Nome: '1000067401_13g',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784031',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784032,
              Nome: '1000067401_13g',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784032',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784033,
              Nome: '1000067401_13g',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784033',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784034,
              Nome: '1000067401_13g',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784034',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872784035,
              Nome: '1000067401_13g',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872784035',
              IdArquivoRelacionado: 872784027
            },
            {
              IdArquivo: 872783818,
              Nome: '1000067401_1c',
              Largura: 45,
              Altura: 45,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783818',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783819,
              Nome: '1000067401_1c',
              Largura: 65,
              Altura: 65,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783819',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783820,
              Nome: '1000067401_1c',
              Largura: 160,
              Altura: 160,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783820',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783821,
              Nome: '1000067401_1c',
              Largura: 292,
              Altura: 292,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783821',
              IdArquivoRelacionado: 872783818
            },
            {
              IdArquivo: 872783822,
              Nome: '1000067401_1c',
              Largura: 90,
              Altura: 90,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783822',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783823,
              Nome: '1000067401_1c',
              Largura: 130,
              Altura: 130,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783823',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783824,
              Nome: '1000067401_1c',
              Largura: 350,
              Altura: 350,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783824',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783825,
              Nome: '1000067401_1c',
              Largura: 180,
              Altura: 180,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783825',
              IdArquivoRelacionado: null
            },
            {
              IdArquivo: 872783826,
              Nome: '1000067401_1c',
              Largura: 500,
              Altura: 500,
              Url:
                'http://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=872783826',
              IdArquivoRelacionado: 872783818
            }
          ],
          Servicos: null,
          FichaTecnica: null,
          SkuEan: null,
          PrecoCusto: 2908.84,
          Altura: 77.5,
          Largura: 145.8,
          Comprimento: 30.0,
          Peso: 20320.0
        }
      ],
      Imagens: [],
      Videos: [],
      Canonical:
        'http://www.casasbahia.com.br/tv-video/Televisores/TV4K/smart-tv-led-55-hdr-ultra-hd-4k-sony-suporte-bi-articulado-de-parede-para-tvs-de-10-a-55-suporte-dvd-cabo-hdmi-1000067401.html',
      FlagRetiraEmLoja: false
    },
    Valido: true,
    Mensagens: [],
    Protocolo: 'dd0d3af0-a463-4588-9656-df0cf10e2b45'
  };

  characteristics = [
    {
      IdCampoValor: 1,
      Nome: 'Controle remoto',
      Valor: 'Sim'
    },
    {
      IdCampoValor: 42774,
      Nome: 'Wi-Fi integrado',
      Valor: 'Sim'
    },
    {
      IdCampoValor: 93188,
      Nome: 'Tecnologia da Tela',
      Valor: 'LED'
    },
    {
      IdCampoValor: 11570,
      Nome: 'Entrada USB',
      Valor: '3'
    },
    {
      IdCampoValor: 20,
      Nome: 'Entrada HDMI',
      Valor: '3'
    }
  ];

  specifications = [
    {
      IdCampoValor: 0,
      Nome: 'Potência de áudio total (RMS)',
      Valor: '10W+10W'
    },
    {
      IdCampoValor: 0,
      Nome: 'Consumo de energia',
      Valor: '136 W'
    },
    {
      IdCampoValor: 0,
      Nome: 'Dimensões s/ base (LxAxP) mm',
      Valor: '1238 x 722 x 58'
    },
    {
      IdCampoValor: 74332,
      Nome: 'Classificação de consumo (Selo ENCE)',
      Valor: 'A'
    },
    {
      IdCampoValor: 0,
      Nome: 'Peso s/ base (kg):',
      Valor: '17,7'
    },
    {
      IdCampoValor: 0,
      Nome: 'Dimensões c/ base (LxAxP) mm',
      Valor: '1238 x 775 x 252'
    },
    {
      IdCampoValor: 0,
      Nome: 'Conteúdo da embalagem',
      Valor:
        '- TV Sony KD-55X705E BR6\r\n- Base de mesa\r\n- Controle remoto\r\n- Baterias\r\n- Cabo de alimentação CA\r\n- Instruções de operação\r\n- Guia de configuração rápida'
    },
    {
      IdCampoValor: 0,
      Nome: 'Padrão do furo p/ instalação na parede',
      Valor: '300 x 200 mm'
    },
    {
      IdCampoValor: 0,
      Nome: 'Observações',
      Valor:
        '1. Para aproveitar a qualidade máxima de sua TV, é necessário recepção de sinal digital, em formato Widescreen, através do conversor integrado. \r\n2. Conforme a Lei nº 11.291/06, informamos que o uso de equipamentos em potência superior a 85 decibéis pode prejudicar a audição. \r\n\r\n3. Devido às normas da ABNT e às resoluções nº 13 de 2006, nº 2 de 2007 e nº 8 de 2009 do CONMETRO, os fabricantes estão mudando as tomadas para o novo padrão. Para utilizar este produto, será preciso adaptador ou a troca da tomada antiga. Não nos responsabilizamos por esta alteração. \r\n\r\n4. Parte das conexões é traseira. Para colocar a TV em um suporte em uma parede ou painel, verificar com o fabricante do suporte a compatibilidade e o espaço necessário para conectar os cabos. \r\n\r\n5. O conteúdo/acesso ao Smart TV é limitado e varia de acordo com o fornecedor. Para o funcionamento do recurso, a TV deve estar conectada à rede de Internet via cabo de rede ou pelo sistema Wi-Fi. Não nos responsabilizamos pela configuração. \r\n\r\nATENÇÃO: uma TV LED possui painel de LCD e iluminação por lâmpadas LED (diodos emissores de luz). A espessura da tela pode ser maior ou menor de acordo com o modelo e fabricante. \r\n\r\n* Itens vendidos separadamente \r\n\r\nA tecnologia 4K dos Smartphones Sony possui resolução de 3.840 pixels na horizontal × 2.160 pixels na vertical (com base no padrão SID). A tecnologia 4K dos televisores Sony possui resolução de 3840x2160 pixels com todos os pixels com as cores RGB (Vermelho, Verde e Azul), compatíveis com os padrões 4K definidos pela Consumer Electronics Association (EUA) e Digital Europe (Europa).'
    }
  ];

  avaliations = {
    nota: '5',
    quantidadeAvaliacoes: 180,
    porcentagemRecomendacao: 95,
    avaliacoes: [
      {
        titulo: '',
        descricao: 'Ótima qualidade ',
        nota: '5',
        avaliacaoGeral: '',
        avaliadorNome: 'Iracy',
        avaliadorEstado: null,
        like: 0,
        dislike: 0,
        data: '10/03/2020',
        galeriaMidia: [],
        idReview: 5914611,
        notaArredondada: 5,
        notaDescricao: '',
        avalidadorCidade: null
      },
      {
        titulo: '',
        descricao:
          'Gostei muito do Cel e a entrega ultra rápido e precisa.Recomendo!',
        nota: '5',
        avaliacaoGeral: '',
        avaliadorNome: 'REGINA',
        avaliadorEstado: null,
        like: 0,
        dislike: 0,
        data: '10/03/2020',
        galeriaMidia: [],
        idReview: 5913377,
        notaArredondada: 5,
        notaDescricao: '',
        avalidadorCidade: null
      },
      {
        titulo: '',
        descricao: 'Bom ',
        nota: '5',
        avaliacaoGeral: '',
        avaliadorNome: 'edmar',
        avaliadorEstado: null,
        like: 0,
        dislike: 0,
        data: '10/03/2020',
        galeriaMidia: [],
        idReview: 5912039,
        notaArredondada: 5,
        notaDescricao: '',
        avalidadorCidade: null
      },
      {
        titulo: '',
        descricao:
          '\\não gostei do fone de ouvido. Muito ruim para encaixar na orelha. E na hora de fazer ligação com ele é complicado.',
        nota: '3',
        avaliacaoGeral: '',
        avaliadorNome: 'Sirlene',
        avaliadorEstado: null,
        like: 0,
        dislike: 0,
        data: '10/03/2020',
        galeriaMidia: [],
        idReview: 5911991,
        notaArredondada: 3,
        notaDescricao: '',
        avalidadorCidade: null
      },
      {
        titulo: '',
        descricao: 'Muito bom.',
        nota: '4',
        avaliacaoGeral: '',
        avaliadorNome: 'Thiago',
        avaliadorEstado: null,
        like: 0,
        dislike: 0,
        data: '10/03/2020',
        galeriaMidia: [],
        idReview: 5911737,
        notaArredondada: 4,
        notaDescricao: '',
        avalidadorCidade: null
      }
    ],
    melhorAvaliacao: {
      titulo: '',
      descricao: 'Muito bom , câmera ótima , não trava um bom espaço...',
      nota: '5',
      avaliacaoGeral: '',
      avaliadorNome: 'Jailson',
      avaliadorEstado: '',
      like: 61,
      dislike: 29,
      data: '04/01/2020',
      galeriaMidia: [],
      idReview: null,
      notaArredondada: 5,
      notaDescricao: '',
      avalidadorCidade: ''
    },
    piorAvaliacao: {
      titulo: '',
      descricao:
        'em menos de 3 meses deu um erro irrecuperavel no sistema, inutilizando o celular',
      nota: '1',
      avaliacaoGeral: '',
      avaliadorNome: 'Oswaldo',
      avaliadorEstado: '',
      like: 0,
      dislike: 0,
      data: '10/02/2020',
      galeriaMidia: [],
      idReview: null,
      notaArredondada: 1,
      notaDescricao: '',
      avalidadorCidade: ''
    },
    composicaoNota: [
      {
        nota: 5,
        porcentagem: 83,
        notaDescricao: ''
      },
      {
        nota: 4,
        porcentagem: 12,
        notaDescricao: ''
      },
      {
        nota: 3,
        porcentagem: 3,
        notaDescricao: ''
      },
      {
        nota: 2,
        porcentagem: 2,
        notaDescricao: ''
      },
      {
        nota: 1,
        porcentagem: 1,
        notaDescricao: ''
      }
    ],
    notasParciais: [
      {
        criterio: 'Recursos',
        nota: 3.0
      },
      {
        criterio: 'Bateria',
        nota: 4.0
      },
      {
        criterio: 'Câmera',
        nota: 3.0
      }
    ],
    tags: [
      {
        descricao: 'produto',
        link: '#'
      },
      {
        descricao: 'excelente',
        link: '#'
      },
      {
        descricao: 'aparelho',
        link: '#'
      },
      {
        descricao: 'câmera',
        link: '#'
      },
      {
        descricao: 'recomendo',
        link: '#'
      },
      {
        descricao: 'gostei',
        link: '#'
      },
      {
        descricao: 'bateria',
        link: '#'
      },
      {
        descricao: 'celular',
        link: '#'
      },
      {
        descricao: 'rápido',
        link: '#'
      },
      {
        descricao: 'qualidade',
        link: '#'
      },
      {
        descricao: 'custo',
        link: '#'
      },
      {
        descricao: 'benefício',
        link: '#'
      },
      {
        descricao: 'loja',
        link: '#'
      },
      {
        descricao: 'dura',
        link: '#'
      },
      {
        descricao: 'number',
        link: '#'
      },
      {
        descricao: 'bonito',
        link: '#'
      },
      {
        descricao: 'trava',
        link: '#'
      },
      {
        descricao: 'boa',
        link: '#'
      },
      {
        descricao: 'super',
        link: '#'
      },
      {
        descricao: 'entrega',
        link: '#'
      }
    ],
    notaDescricao: null,
    notaArredondada: 5,
    possuiMaisRegistros: true,
    possuiMelhorPiorAvaliacao: true
  };
}
