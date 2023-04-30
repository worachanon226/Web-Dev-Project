FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
ENV PORT 5226
WORKDIR /app
EXPOSE $PORT

ENV ASPNETCORE_URLS=http://+:${PORT}
# ENV ConnectionStrings__PostgreSQLConnection="Server=db;Port=5432;Database=foodpool;User Id=postgres;Password=qwerty"
# ENV secretKey=nhh7m^PsCE!2dLzj!%R$C4@RDyr3Es

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["backend.csproj", "./"]
COPY . .
WORKDIR "/src/."
RUN dotnet build "backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backend.csproj" -c Release -o /app/publish /p:UseAppHost=false 

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

ENTRYPOINT ["dotnet", "backend.dll"]